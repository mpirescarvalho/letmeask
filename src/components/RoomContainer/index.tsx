import { FormEvent, ReactNode, useState } from 'react';

import logoDarkImg from '../../assets/images/logo-dark.svg';
import logoLightImg from '../../assets/images/logo-light.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { useTheme } from '../../hooks/useTheme';

import { Header, Main, RoomTitle, Form, QuestionList } from './styles';

type QuestionType = {
	id: string;
	author: {
		name: string;
		avatar: string;
	};
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
	likeCount: number;
	likeId: string | undefined;
};

type RoomContainerProps = {
	admin?: boolean;
	roomId: string;
	onRoomEnd?: () => void;
	onSendQuestion?: (question: string) => void;
	renderQuestionButtons: (question: QuestionType) => ReactNode;
};

export function RoomContainer({
	admin,
	roomId,
	onRoomEnd,
	onSendQuestion,
	renderQuestionButtons,
}: RoomContainerProps) {
	const [newQuestion, setNewQuestion] = useState('');
	const { user } = useAuth();
	const { title, questions } = useRoom(roomId);
	const { theme } = useTheme();

	function handleQuestionFormSubmit(event: FormEvent) {
		event.preventDefault();
		onSendQuestion?.(newQuestion);
		setNewQuestion('');
	}

	return (
		<div>
			<Header>
				<div className="content">
					{theme.title === 'light' ? (
						<img src={logoLightImg} alt="Letmeask" />
					) : (
						<img src={logoDarkImg} alt="Letmeask" />
					)}
					<div>
						<RoomCode code={roomId} />
						{admin && (
							<Button isOutlined onClick={onRoomEnd}>
								Encerrar Sala
							</Button>
						)}
					</div>
				</div>
			</Header>

			<Main>
				<RoomTitle>
					<h1>Sala {title}</h1>
					{questions.length > 0 && <span>{questions.length} perguntas</span>}
				</RoomTitle>

				{!admin && (
					<Form onSubmit={handleQuestionFormSubmit}>
						<textarea
							placeholder="O que você quer perguntar?"
							onChange={(event) => setNewQuestion(event.target.value)}
							value={newQuestion}
						/>

						<footer>
							{user ? (
								<div className="user-info">
									<img src={user.avatar} alt={user.name} />
									<span>{user.name}</span>
								</div>
							) : (
								<span>
									Para enviar uma pergunta, <button>faça seu login</button>.
								</span>
							)}
							<Button type="submit" disabled={!user}>
								Enviar pergunta
							</Button>
						</footer>
					</Form>
				)}

				<QuestionList>
					{questions.map((question) => (
						<Question
							key={question.id}
							content={question.content}
							author={question.author}
							isAnswered={question.isAnswered}
							isHighlighted={question.isHighlighted}
						>
							{renderQuestionButtons(question)}
						</Question>
					))}
				</QuestionList>
			</Main>
		</div>
	);
}

import { useHistory, useParams } from 'react-router-dom';

import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { RoomContainer } from '../../components/RoomContainer';
import { database } from '../../services/firebase';

type RoomParams = {
	id: string;
};

export function AdminRoom() {
	const history = useHistory();
	const params = useParams<RoomParams>();
	const roomId = params.id;

	async function handleEndRoom() {
		database.ref(`rooms/${roomId}`).update({
			endedAt: new Date(),
		});

		history.push('/');
	}

	async function handleDeleteQuestion(questionId: string) {
		if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
			await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
		}
	}

	async function handleCheckQuestionAsAnswered(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isAnswered: true,
		});
	}

	async function handleHighlightQuestion(questionId: string) {
		await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
			isHighlighted: true,
		});
	}

	return (
		<RoomContainer
			admin
			roomId={roomId}
			onRoomEnd={handleEndRoom}
			renderQuestionButtons={(question) => (
				<>
					{!question.isAnswered && (
						<>
							<button
								type="button"
								onClick={() => handleCheckQuestionAsAnswered(question.id)}
							>
								<img src={checkImg} alt="Marcar pergunta como respondida" />
							</button>
							<button
								type="button"
								onClick={() => handleHighlightQuestion(question.id)}
							>
								<img src={answerImg} alt="Dar destaque à pergunta" />
							</button>
						</>
					)}
					<button type="button" onClick={() => handleDeleteQuestion(question.id)}>
						<img src={deleteImg} alt="Remover pergunta" />
					</button>
				</>
			)}
		/>
	);
}
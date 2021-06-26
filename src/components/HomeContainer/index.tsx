import { ReactNode } from 'react';

import illustrationImg from '../../assets/images/illustration.svg';

import { Container, Aside, Main, Content } from './styles';

type HomeContainerProps = {
	children: ReactNode;
};

export function HomeContainer({ children }: HomeContainerProps) {
	return (
		<Container>
			<Aside>
				<img
					src={illustrationImg}
					alt="Ilustração simbolizando perguntas e respostas"
				/>
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire as dúvidas da sua audiência em tempo-real</p>
			</Aside>
			<Main>
				<Content>{children}</Content>
			</Main>
		</Container>
	);
}

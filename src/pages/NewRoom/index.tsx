import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoDarkImg from '../../assets/images/logo-light.svg';
import logoLightImg from '../../assets/images/logo-light.svg';

import { HomeContainer } from '../../components/HomeContainer';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

import { Logo, Title, Form, NewRoomText } from './styles';

export function NewRoom() {
	const { user } = useAuth();
	const { theme } = useTheme();
	const history = useHistory();
	const [newRoom, setNewRoom] = useState('');

	async function handleCreateRoom(event: FormEvent) {
		event.preventDefault();

		if (newRoom.trim() === '') {
			return;
		}

		const roomRef = database.ref('rooms');

		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		});

		history.push(`/admin/rooms/${firebaseRoom.key}`);
	}

	return (
		<HomeContainer>
			{theme.title === 'light' ? (
				<Logo src={logoLightImg} alt="Perguntaê" />
			) : (
				<Logo src={logoDarkImg} alt="Perguntaê" />
			)}
			<Title>Criar uma nova sala</Title>
			<Form onSubmit={handleCreateRoom}>
				<input
					type="text"
					placeholder="Nome da sala"
					onChange={(event) => setNewRoom(event.target.value)}
					value={newRoom}
				/>
				<Button type="submit">Criar sala</Button>
			</Form>
			<NewRoomText>
				Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
			</NewRoomText>
		</HomeContainer>
	);
}

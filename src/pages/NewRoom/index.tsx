import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { HomeContainer } from '../../components/HomeContainer';
import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { Logo, Title, Form, NewRoomText } from './styles';

export function NewRoom() {
	const { user } = useAuth();
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
			<Logo src={logoImg} alt="Letmeask" />
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

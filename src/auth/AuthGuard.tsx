import { useAuth } from "./AuthContext"

type Props = {
	authorizedScreen: React.ReactNode
	loginScreen: React.ReactNode
}

export const AuthGuard: React.FC<Props> = ({ authorizedScreen, loginScreen }) => {
	const { user } = useAuth()

	if (user) {
		return authorizedScreen
	}

	return loginScreen
}

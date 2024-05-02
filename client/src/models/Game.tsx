import { User } from "./User"

export interface Game {
    gameId: number
    userId: string
    score: number
    playedAt: boolean
    createdBy: User
}
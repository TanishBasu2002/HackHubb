import { Member, Profile, Server } from "@prisma/client"

export type ServerWithMemberandProfile = Server & {
    members:(Member & {profile:Profile})[]
}
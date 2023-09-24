/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import Billboard from "@/components/store/ui/billboard";
import Container from "@/components/store/ui/container";
import getBillboard from "@/lib/actions/get-billboard";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const revlidate =0;
const Page = async({params}:{params:{id:string}}) => {
    const user = await currentUser();
    if (!user) return null;
    const billboard = await getBillboard("9c1ed598-ce61-4e6c-bcad-cc2c4d03d8a8");
    const userInfo = await fetchUser(user.id);
    if(!userInfo?.onboarded) redirect('/onboarding')
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
    )
}
export default Page;
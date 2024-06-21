import RmibForm from "@/Components/Test/Rmib/Form";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

const RmibIndex = ({ auth, datas }) => {
    console.log("datas", datas);
    return (
        <Authenticated user={auth.user}>
            <div className="p-10 ">
                <RmibForm title={"Section A"} datas={datas} />
            </div>
        </Authenticated>
    );
};

export default RmibIndex;

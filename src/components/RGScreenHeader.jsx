// import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function RGScreenHeader({ title, actionButtons,backbtn }) {
  let navigate = useNavigate()
  return (
    <>
      <div className="rounded-lg p-5 mb-2 bg-[lightgrey] flex justify-between items-center">
        <h1 className="text-3xl">
         {title}
        </h1>
        {actionButtons.map((x,i) =><div key={i}>{ x.display()}</div>)}
      </div>
    </>
  );
}

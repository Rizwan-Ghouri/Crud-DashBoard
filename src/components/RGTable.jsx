import RGButton from "./RGButton";

export default function RGTable(props) {
  const {data, columns } = props;

  // columns = [
  //   {
  //     key:'name',
  //     label:'Student Name'
  //   },
  //   {
  //     key:'fatherName',
  //     label:'Father Name'
  //   },
  //   {
  //     key:'cnic',
  //     label:'CNIC Number'
  //   },
  // ]

  // data = [
  //   {
  //     name:"Haris",
  //     fatherName:"Muhammad Ahmed",
  //     cnic:"454613247651"
  //   },
  //   {
  //     name:"Haris",
  //     fatherName:"Muhammad Ahmed",
  //     cnic:"454613247651"
  //   },
  //   {
  //     name:"Haris",
  //     fatherName:"Muhammad Ahmed",
  //     cnic:"454613247651"
  //   },
  //   {
  //     name:"Haris",
  //     fatherName:"Muhammad Ahmed",
  //     cnic:"454613247651"
  //   },
  // ]

  return (
    <>
      <table className="w-full">
        <thead className="bg-black text-white">
          <tr>
            {columns.map((x, i) => (
              <th className="p-2" key={i}>{x.label}</th>
            ))}
          </tr>
        </thead>
       <tbody>
        {
          data.map((x, i) => (

            <tr className="border-2" key={i}>
                {columns.map((col,colInd)=>(
                  <>
                  <td className="p-2 border-2 text-center" key={colInd}>{x[col.key]}
                  </td>                  
                  </>
                ))}
             
            </tr>
          ))
        }
       </tbody>
      </table>
    </>
  );
}

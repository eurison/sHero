import { useCallback } from "react";
import { Button } from "../Button/Button";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string
}
export default function Card({id}: Props) {
  const navigate = useNavigate()
  const handleSelectBook = useCallback(() => {
    navigate(`/${id}`)
  },[id, navigate])
  return (
    <div className="p-4 grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full mt-4 ">
      <img 
        src="https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg" 
        alt="" 
        className="col-span-1 w-full  rounded-sm"
      />
      <div className="col-span-2 px-4">
        <p className="font-bold text-2xl text-evergreen">Código limpo</p>
        <p className="font-light text-lg text-gray-500 mb-3">Autor</p>
        <Tag title={'VueJs'} className="mb-3"/>
        <p>
          <strong>Sinopse:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Iusto expedita vitae consequuntur doloremque. 
          Unde, nisi sunt? Excepturi repudiandae deserunt quis 
          porro voluptates consequatur quae, non corporis accusantium. 
          Saepe culpa ab eligendi.
        </p>
        <Button  variant='light' title='Ver mais' className="w-full" onClick={() => handleSelectBook()}/>
      </div>
    </div>
  )
}
"use client";

import getUrl from "@/lib/getUrl";
import { useBoardStore } from "@/store/BoardStore";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

type Props={
    todo:Todo;
    index:number;
    id:TypedColumn;
    innerRef:(element: HTMLElement|null) => void;
    draggableProps:DraggableProvidedDraggableProps;
    dragHandleProps:DraggableProvidedDragHandleProps | null | undefined;
}

function TodoCard({id,todo,index,innerRef,dragHandleProps,draggableProps}:Props) {

  const deleteTask=useBoardStore(state => state.deleteTask);

  const [imageUrl,setImageUrl] = useState<string|null>(null);

  useEffect(() => {
    if(todo.image){
      const fetchImage=async () => {
        const url = await getUrl(todo.image!);
        console.log(url);
        if(url)setImageUrl(url.toString());
      }
      fetchImage();
    }
  },[todo]);

  return (
    <div
    className="rounded-md bg-white space-y-2 drop-shadow-md"
    {...dragHandleProps} 
    {...draggableProps}
    ref={innerRef}
    >
        <div className="flex items-center justify-between p-5">
            <p>{todo.title}</p>
            <button
              onClick={() => deleteTask(index,todo,id)}
            className="text-red-500 hover:text-red-600">
                <XCircleIcon className="ml-5 h-8 w-8" />
            </button>
        </div>

        {imageUrl && (
          <div className="h-full w-full rounded-b-md">
            <Image 
              src={imageUrl}
              alt="Task Image"
              width={400}
              height={200}
              className='w-full object-contain rounded-b-md'
            />
          </div>
        )}
    </div>
  )
}

export default TodoCard
"use client";

import { XCircleIcon } from "@heroicons/react/24/solid";
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
  return (
    <div
    className="rounded-md bg-white space-y-2 drop-shadow-md"
    {...dragHandleProps} 
    {...draggableProps}
    ref={innerRef}
    >
        <div className="flex items-center justify-between p-5">
            <p>{todo.title}</p>
            <button className="text-red-500 hover:text-red-600">
                <XCircleIcon className="ml-5 h-8 w-8" />
            </button>
        </div>
    </div>
  )
}

export default TodoCard
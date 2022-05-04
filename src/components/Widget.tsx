import { Chats } from "phosphor-react";
import { useState } from "react";

export function Widget(){
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)
    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className="absolute bottom-5 right-5 flex flex-col items-end">
            {isWidgetOpen && <p>Hello World</p>}
            <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <Chats className="w-6 h-6" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xl transition-all duration-500">
                    <span className="pl-2"></span>
                    Vamos conversar?
                </span>
            </button>
        </div>
    )
}
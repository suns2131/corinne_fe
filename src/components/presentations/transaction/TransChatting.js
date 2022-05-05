import React from "react";
import { useDispatch, useSelector } from "react-redux";
import sockjs from "sockjs-client"
import Stomp from 'stompjs'
import {addChat} from '../../../state/reducer/transaction/chat'

function TransChatting() {
    const dispatch = useDispatch();
    const chatting = useSelector((state) => state.chat.ChatMessage);
    return (
        <div>
          {chatting && chatting.map((el) => (
            <ul>
              {el.nickname === '코린이'? 
                <div className="flex mt-[10px] mb-[10px] ">
                  <div className=" w-[32px] h-[32px] rounded-full bg-[#EDEDED] mr-[13px] mt-[10px]" />
                    <div>
                      <p className=" text-[#cecece] text-sm font-normal ">{el.nickname}</p>
                      <div className="flex">
                      <div className=" bg-[#eeeeee] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] text-[15px] py-[7px] px-[19px]">{el.message}</div> 
                        <p className=" flex justify-center items-end text-[#cecece] text-[12px]">00:00</p> 
                    </div>
                  </div>
                </div>  
                :
                <div className="flex justify-end items-center mt-[10px] mb-[10px]  ">
                <div className="flex overflow-hidden">
                  <p className=" flex justify-center items-end text-[#cecece] text-[12px] mr-[5px]">00:00</p> 
                  <div 
                    className=" bg-cur rounded-full text-[15px] py-[7px] px-[19px] text-neutrals5 bg-curp"
                    >
                    {el.message}
                    </div> 
                </div>
              </div>  
              }
            </ul>  
          ))}
    </div>
    );
}

export default TransChatting;
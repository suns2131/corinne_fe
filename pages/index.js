import Headers from '../components/shared/Headers/container/Headers'

//  import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div 
      className=" w-screen h-screen flex flex-col justify-start items-center bg-cover bg-center  bg-[url('/images/corinne_background.gif')] ">
      <div className=' w-container h-headers mb-[251px] '>
        <Headers />
      </div>
      <div className=' font-Pretendard text-neutrals5  w-container  '>
         <p className=' text-ch1 font-bold mb-8  '>코인 투자의 시작, <br/>코린이를 위한 corinne!</p>
         <p className=' text-ch4 font-normal mb-[189px]'>가상 화폐 초보 투자자를 위해 가볍게 즐길 수 있도록 <br/>다양한 기능이 제공되는 모의투자 서비스입니다.</p>
      </div>
    </div>
  )
}

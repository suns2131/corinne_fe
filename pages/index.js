import HomeContainer from '../src/components/containers/HomeContainer';
import Wrapper from '../src/components/presentations/Wrapper';
//  import styles from '../styles/Home.module.css'

export default function Home() {
  // return <HomeContainer />;
  return (
    <Wrapper>
      <div className="w-full h-full flex justify-center items-center text-Neutrals-white text-[3em]">
        <span className="mt-[5em]">서비스 점검중입니다.</span>
      </div>
    </Wrapper>
  );
}

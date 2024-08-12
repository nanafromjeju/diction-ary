import HorizonLine from "./HorizonLine";

function Memo() {
  return (
    <div className="memo">
      <h2 className="memo-title">검색 엔진 최적화</h2>
      <h3 className="memo-subtitle"> Search Engine Optimize</h3>
      <HorizonLine color="#B0A695" />
      <p className="memo-text">
        웹 페이지를 구글 등 검색 엔진이나 포털사이트의 기준에 맞춰 구성하는
        작업이다.
        <br /> 사람들이 많이 검색할 만한 관련 키워드를 배치하고, 웹 표준을
        지키며, 스팸으로 분류되지 않게끔 하는 등 웹 페이지 링크가 더 많이
        노출되도록 처리한다. <br /> 온라인 마케팅의 필수 요소로도 꼽히는데,
        SEO가 잘 적용된 웹 페이지는 검색 시 상단에 오를 수 있기 때문.
      </p>
    </div>
  );
}

export default Memo;

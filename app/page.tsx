import Secession from "../public/assets/secession.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-primary p-10">
      <h1 className="text-3xl-b mb-4 text-color-inverse">Design Token Test</h1>
      <Secession />
      <p className="text-lg-r text-color-secondary mb-8">
        surface / text / border 네이밍 기준 테스트 화면
      </p>

      {/* Button 테스트 */}
      <div className="flex gap-4 mb-10">
        <button className="bg-brand-primary text-color-inverse px-6 py-3 rounded-lg hover:bg-interaction-hover">
          Primary
        </button>

        <button className="bg-point-purple text-color-inverse px-6 py-3 rounded-lg">
          Point
        </button>
      </div>

      {/* Surface 테스트 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-surface-secondary p-6 rounded-xl">
          <p className="text-lg-m text-color-primary">Surface Secondary</p>
          <p className="text-md-r text-color-secondary mt-2">
            카드 / 섹션 배경
          </p>
        </div>

        <div className="bg-surface-tertiary p-6 rounded-xl">
          <p className="text-lg-m text-color-primary">Surface Tertiary</p>
          <p className="text-md-r text-color-secondary mt-2">서브 레이어</p>
        </div>

        <div className="bg-surface-secondary border border-primary p-6 rounded-xl">
          <p className="text-lg-m text-color-primary">Surface + Border</p>
          <p className="text-md-r text-color-secondary mt-2">카드 + 경계선</p>
        </div>
      </div>

      {/* Text scale 테스트 */}
      <div className="mt-12 space-y-2">
        <p className="text-xl-b text-color-primary">xl-b</p>
        <p className="text-lg-m text-color-primary">lg-m</p>
        <p className="text-md-r text-color-default">md-r</p>
        <p className="text-xs-r text-color-disabled">xs-r disabled</p>
      </div>
    </main>
  );
}

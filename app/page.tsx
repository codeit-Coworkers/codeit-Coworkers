import Secession from "../public/assets/secession.svg";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-primary p-10">
      <h1 className="mb-4 text-3xl-b text-color-inverse">Design Token Test</h1>
      <Secession />
      <p className="mb-8 text-lg-r text-color-secondary">
        surface / text / border 네이밍 기준 테스트 화면
      </p>

      {/* Button 테스트 */}
      <div className="mb-10 flex gap-4">
        <button className="rounded-lg bg-brand-primary px-6 py-3 text-color-inverse hover:bg-interaction-hover">
          Primary
        </button>

        <button className="rounded-lg bg-point-purple px-6 py-3 text-color-inverse">
          Point
        </button>
      </div>

      {/* Surface 테스트 */}
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-xl bg-surface-secondary p-6">
          <p className="text-lg-m text-color-primary">Surface Secondary</p>
          <p className="mt-2 text-md-r text-color-secondary">
            카드 / 섹션 배경
          </p>
        </div>

        <div className="rounded-xl bg-surface-tertiary p-6">
          <p className="text-lg-m text-color-primary">Surface Tertiary</p>
          <p className="mt-2 text-md-r text-color-secondary">서브 레이어</p>
        </div>

        <div className="border-primary rounded-xl border bg-surface-secondary p-6">
          <p className="text-lg-m text-color-primary">Surface + Border</p>
          <p className="mt-2 text-md-r text-color-secondary">카드 + 경계선</p>
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

import Badge from "../../../components/common/Badge";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-surface-secondary p-10">
      <h1 className="mb-8 text-3xl-b text-color-primary">
        Badge 컴포넌트 테스트
      </h1>

      {/* Small Size */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl-sb text-color-primary">Small Size</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm-m text-color-secondary">done small</span>
            <Badge state="done" size="small" current={5} total={5} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm-m text-color-secondary">
              ongoing small
            </span>
            <Badge state="ongoing" size="small" current={3} total={5} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm-m text-color-secondary">start small</span>
            <Badge state="start" size="small" current={0} total={0} />
          </div>
        </div>
      </section>

      {/* Large Size */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl-sb text-color-primary">Large Size</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-sm-m text-color-secondary">
              ongoing large
            </span>
            <Badge state="ongoing" size="large" current={3} total={5} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm-m text-color-secondary">start large</span>
            <Badge state="start" size="large" current={0} total={0} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm-m text-color-secondary">done large</span>
            <Badge state="done" size="large" current={5} total={5} />
          </div>
        </div>
      </section>

      {/* 모든 조합 테스트 */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl-sb text-color-primary">
          All Combinations
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Small */}
          <div>
            <h3 className="mb-3 text-lg-sb text-color-primary">Small</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Badge state="done" size="small" current={5} total={5} />
                <span className="text-md-r text-color-secondary">done 5/5</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge state="ongoing" size="small" current={3} total={5} />
                <span className="text-md-r text-color-secondary">
                  ongoing 3/5
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge state="start" size="small" current={0} total={0} />
                <span className="text-md-r text-color-secondary">
                  start 0/0 (회색)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge state="start" size="small" current={0} total={5} />
                <span className="text-md-r text-color-secondary">
                  start 0/5
                </span>
              </div>
            </div>
          </div>

          {/* Large */}
          <div>
            <h3 className="mb-3 text-lg-sb text-color-primary">Large</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Badge state="done" size="large" current={5} total={5} />
                <span className="text-md-r text-color-secondary">done 5/5</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge state="ongoing" size="large" current={3} total={5} />
                <span className="text-md-r text-color-secondary">
                  ongoing 3/5
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge state="start" size="large" current={0} total={0} />
                <span className="text-md-r text-color-secondary">
                  start 0/0 (회색)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge state="start" size="large" current={0} total={5} />
                <span className="text-md-r text-color-secondary">
                  start 0/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

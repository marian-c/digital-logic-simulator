import { Simulator } from '@/app/v2/modules/simulator';
import { config } from '@/config';

export default function V2() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="inline font-bold">Digital logic simulator</h1> (
          <a className="text-blue-500" href={config.sourceCodeUrl}>
            source on Github
          </a>
          )
        </div>
        <div>
          <select>
            <option>Load example</option>
            <option>Example 1</option>
            <option>Example 2</option>
          </select>
        </div>
      </div>
      <div className="flex-grow border border-amber-500 flex">
        <Simulator />
      </div>
    </div>
  );
}

import Button from "./Button";
import { secondaryButtons } from '../lib/constants'


export default function ButtonGroup() {

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => {
        return (
          <Button key={button} type='secondary'>{button}</Button>
        );
      })}
    </section>
  )
}

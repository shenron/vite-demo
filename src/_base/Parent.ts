import dto from './dto';
import Child from './Child';

@dto({
  mixins: [Child],
})
export default class Parent {
  parentMsg: string = '';
}

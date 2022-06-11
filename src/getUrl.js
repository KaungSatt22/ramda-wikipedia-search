import { concat } from "ramda";

const getUrl = concat(
    'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='
  );
export default getUrl;
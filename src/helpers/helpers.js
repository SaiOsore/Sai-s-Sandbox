import { usePath } from 'hookrouter';

export const PathLabel = (url, className = "active") => {
  const path = usePath();
  if(path === url) {
    return className;
  }
}

import style from '../css/aqua-gibs.useable.less';
import templateHtml from '../html/aqua-gibs.html';

style.use();

let image = null;

$(document).ready(function() {
  // Pre-load logo hover image
  image = new Image();
  image.src = '/images/portals/ornl/ornl-daac-logo-color.png';
  $(document.body).append(templateHtml);
});

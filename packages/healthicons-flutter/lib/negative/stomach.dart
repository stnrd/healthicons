import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Stomach extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Stomach({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM23.542 17.038C19.8888 16.9598 17.8954 16.4081 16.7155 15.1219C16.0738 14.4223 15.595 13.422 15.2813 11.9352C14.9663 10.4421 14.831 8.52286 14.831 6.04785H12.831C12.831 8.57284 12.9669 10.6536 13.3244 12.348C13.6832 14.0487 14.2781 15.4234 15.2417 16.4738C17.0159 18.408 19.7773 18.9609 23.4963 19.038C23.3811 25.7985 22.0755 28.4938 20.5693 29.6227C19.7824 30.2125 18.8301 30.4641 17.6755 30.5506C16.891 30.6094 16.1092 30.5906 15.2633 30.5702C14.8079 30.5593 14.334 30.5479 13.831 30.5479C11.6683 30.5479 10.0303 31.217 8.8301 32.2852C7.64918 33.3363 6.96534 34.7077 6.56786 36.0049C6.16975 37.3041 6.04121 38.5856 6.00907 39.5294C5.9929 40.0045 6.00091 40.4019 6.01324 40.6834C6.0194 40.8243 6.02667 40.9367 6.0326 41.0159C6.03557 41.0554 6.0382 41.0868 6.0402 41.1092L6.04268 41.1362L6.04349 41.1446L6.04389 41.1486C6.04394 41.149 6.04398 41.1495 7.03881 41.0479C8.03363 40.9462 8.03367 40.9466 8.0337 40.9469L8.03359 40.9458L8.03233 40.932C8.03113 40.9185 8.02926 40.8965 8.02701 40.8665C8.02252 40.8065 8.01652 40.7148 8.01132 40.5959C8.0009 40.3579 7.99376 40.0131 8.00791 39.5975C8.03643 38.7601 8.15047 37.6666 8.4801 36.5908C8.81037 35.513 9.33943 34.5094 10.1598 33.7792C10.9508 33.0751 12.0838 32.5608 13.7669 32.5481C17.1992 33.0143 19.6131 35.0975 22.2038 37.3334L22.3158 37.43C24.8885 39.6497 27.7022 42.0479 31.7432 42.0479C35.6951 42.0479 38.3351 40.3804 39.9335 37.8287C41.4867 35.3491 42 32.1301 42 29.0479V18.0479C42 14.8055 40.8788 12.2871 39.1188 10.58C37.3706 8.88435 35.0522 8.04785 32.7523 8.04785C30.4523 8.04785 28.1339 8.88435 26.3857 10.58C24.813 12.1056 23.7503 14.279 23.542 17.038ZM24.9797 24.9431C28.3179 23.1387 30.8488 24.4238 33.2321 25.6339C35.4399 26.7549 37.521 27.8117 40 26.2885V18.0479C40 15.2902 39.0593 13.3086 37.7263 12.0157C36.3817 10.7114 34.5762 10.0479 32.7523 10.0479C30.9284 10.0479 29.1229 10.7114 27.7782 12.0157C26.4453 13.3086 25.5046 15.2902 25.5046 18.0479C25.5046 20.8167 25.3263 23.0879 24.9797 24.9431Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
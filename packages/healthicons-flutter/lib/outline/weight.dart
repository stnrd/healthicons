import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Weight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Weight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.8513 16.2506C36.5933 17.0688 36.3659 18.3263 35.4616 18.9606L30.5893 22.3781C29.685 23.0124 28.4495 22.7564 27.556 22.1071C27.3273 21.9408 27.0865 21.7904 26.8353 21.6571C25.9922 21.2096 25.0551 20.9681 24.1007 20.9522C23.1463 20.9363 22.2016 21.1466 21.3441 21.5657C21.0885 21.6906 20.8429 21.8329 20.6088 21.9915C19.6942 22.6108 18.4509 22.8255 17.5682 22.1615L12.8123 18.5837C11.9296 17.9197 11.7441 16.6553 12.513 15.8623C13.7981 14.5369 15.3066 13.4401 16.9744 12.625C19.2429 11.5163 21.7416 10.9602 24.2662 11.0022C26.7908 11.0442 29.2697 11.6831 31.5 12.8667C33.1397 13.7368 34.6109 14.8832 35.8513 16.2506ZM34.1956 17.4057C33.1476 16.2921 31.9212 15.3544 30.5625 14.6334C28.611 13.5977 26.442 13.0387 24.2329 13.0019C22.0239 12.9652 19.8375 13.4518 17.8526 14.4219C16.4707 15.0973 15.2137 15.9937 14.1293 17.0718L18.7666 20.5603C18.7816 20.5652 18.8205 20.5727 18.8976 20.5657C19.0544 20.5516 19.2744 20.4796 19.4875 20.3354C19.799 20.1244 20.1259 19.935 20.4658 19.7688C21.607 19.2111 22.864 18.9314 24.1339 18.9525C24.185 18.9533 24.236 18.9547 24.2869 18.9565C24.3251 18.8764 24.3746 18.8 24.4357 18.7298L27.1821 15.5719C27.5446 15.1552 28.1762 15.1112 28.5929 15.4736C29.0097 15.8361 29.0537 16.4677 28.6912 16.8844L26.5368 19.3616C26.9615 19.5026 27.375 19.6793 27.7728 19.8904C28.1071 20.0678 28.4275 20.268 28.7318 20.4892C28.9399 20.6405 29.1575 20.7198 29.3137 20.739C29.3905 20.7485 29.4297 20.7423 29.4448 20.7379L34.1956 17.4057ZM29.4525 20.7347C29.4528 20.7349 29.45 20.7364 29.4448 20.7379C29.4492 20.7354 29.4523 20.7344 29.4525 20.7347ZM18.759 20.5567C18.7592 20.5565 18.7623 20.5576 18.7666 20.5603C18.7615 20.5585 18.7587 20.557 18.759 20.5567Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.2161 42C38.339 42 40.0921 40.3416 40.2099 38.2219L41.7655 10.2219C41.8928 7.92908 40.068 6 37.7716 6L10.2284 6C7.93206 6 6.10718 7.92907 6.23456 10.2219L7.79011 38.2219C7.90787 40.3415 9.66102 42 11.7839 42L36.2161 42ZM11.7839 40L36.2161 40C37.2775 40 38.1541 39.1708 38.213 38.1109L39.7685 10.1109C39.8322 8.96454 38.9198 8 37.7716 8L10.2284 8C9.08023 8 8.16779 8.96454 8.23148 10.1109L9.78703 38.1109C9.84591 39.1708 10.7225 40 11.7839 40Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
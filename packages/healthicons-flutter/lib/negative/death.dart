import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Death extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Death({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.822 33.9969C12.9159 34.0003 13.0258 34.0025 13.1538 34.0025C14.1742 34.0025 15.1196 34.2338 15.9193 34.764C16.7212 35.2957 17.2144 36.0203 17.5113 36.729C17.9303 37.7291 18.0089 38.8508 18.023 39.6603C18.1967 39.7078 18.4375 39.7597 18.7607 39.8064C20.0665 39.9953 21.8938 40 24 40C26.1062 40 27.9335 39.9953 29.2393 39.8064C29.5625 39.7597 29.8033 39.7078 29.977 39.6603C29.9911 38.8507 30.0697 37.7291 30.4887 36.729C30.7856 36.0203 31.2788 35.2957 32.0807 34.764C32.8804 34.2338 33.8258 34.0025 34.8462 34.0025C34.9742 34.0025 35.0841 34.0003 35.178 33.9969C35.1785 33.9057 35.1777 33.8029 35.1757 33.6865C35.1729 33.5158 35.1669 33.3062 35.1602 33.0695C35.146 32.5709 35.1282 31.9476 35.1282 31.2902C35.1282 29.141 35.9181 27.8968 36.4934 26.9906C36.6142 26.8004 36.7255 26.625 36.8181 26.4593C37.3258 25.5505 38 23.9828 38 19.7236C38 15.8082 36.3199 12.9522 33.7874 11.0214C31.1994 9.04819 27.6491 8 24 8C20.3509 8 16.8006 9.04819 14.2126 11.0214C11.6801 12.9522 9.99998 15.8082 10 19.7236C10 23.9828 10.6742 25.5505 11.1819 26.4593C11.2745 26.625 11.3859 26.8004 11.5067 26.9907C12.082 27.897 12.8718 29.141 12.8718 31.2902C12.8718 31.9478 12.854 32.5713 12.8398 33.07C12.8331 33.3069 12.8271 33.5157 12.8243 33.6865C12.8223 33.8029 12.8215 33.9057 12.822 33.9969ZM17.5 33C19.9853 33 22 30.7614 22 28C22 25.2386 19.9853 23 17.5 23C15.0147 23 13 25.2386 13 28C13 30.7614 15.0147 33 17.5 33ZM27 36.2759C27 37.1705 26.3273 38 25.4062 38C24.7671 38 24.2928 37.6278 24 37.0998C23.7073 37.6278 23.233 38 22.5938 38C21.6726 38 21 37.1703 21 36.2759C21 34.3611 24 33 24 33C24 33 27 34.2788 27 36.2759ZM30.5 33C32.9853 33 35 30.7614 35 28C35 25.2386 32.9853 23 30.5 23C28.0147 23 26 25.2386 26 28C26 30.7614 28.0147 33 30.5 33Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM10.842 32.9583C10.7715 35.4043 10.7542 36.0025 13.1538 36.0025C16.0256 36.0025 16.0256 38.5729 16.0256 40.2864C16.0256 42 19.8975 42 24 42C28.1025 42 31.9744 42 31.9744 40.2864C31.9744 38.5729 31.9744 36.0025 34.8462 36.0025C37.2458 36.0025 37.2285 35.4042 37.158 32.9582C37.1441 32.4769 37.1282 31.9241 37.1282 31.2902C37.1282 29.7648 37.5778 29.0441 38.1211 28.1729C38.9511 26.8422 40 25.1606 40 19.7236C40.0001 1.42546 7.99991 1.42546 8 19.7236C8.00003 25.1606 9.04892 26.8422 9.8789 28.1729C10.4222 29.0441 10.8718 29.7648 10.8718 31.2902C10.8718 31.9241 10.8559 32.477 10.842 32.9583Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
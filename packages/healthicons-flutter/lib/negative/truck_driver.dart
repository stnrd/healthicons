import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class TruckDriver extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const TruckDriver({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM31.9495 19.0973C35.021 18.0489 34.4758 16.2976 33.4599 15H14.8187C13.5479 16.3488 12.7076 18.1878 16.0378 19.218C16.0128 19.4755 16 19.7364 16 20C16 24.4183 19.5817 28 24 28C28.4183 28 32 24.4183 32 20C32 19.6951 31.9829 19.3938 31.9495 19.0973ZM29.9879 19.6157C28.4172 19.8602 26.3703 20 23.7275 20C21.3459 20 19.4706 19.8865 18.0081 19.6847C18.0027 19.7891 18 19.8942 18 20C18 23.3137 20.6863 26 24 26C27.3137 26 30 23.3137 30 20C30 19.8708 29.9959 19.7427 29.9879 19.6157ZM23 32.0619V36.1707C22.0956 36.4903 21.3903 37.2313 21.1198 38.1577L16.603 36.9474C17.681 34.3382 20.0994 32.4236 23 32.0619ZM25 32.0619V36.1707C25.9043 36.4903 26.6097 37.2313 26.8801 38.1577L31.397 36.9474C30.319 34.3382 27.9006 32.4236 25 32.0619ZM31.9218 38.8774L26.7179 40.2718C26.2393 41.2928 25.2022 42 24 42C22.7978 42 21.7607 41.2928 21.2821 40.2718L16.0781 38.8774C16.0266 39.2442 16 39.619 16 40V41C16 41.5523 15.5523 42 15 42C14.4477 42 14 41.5523 14 41V40.3932C13.5167 40.8005 12.8487 40.9727 12.192 40.7968L10.2601 40.2791C9.19318 39.9932 8.56002 38.8966 8.8459 37.8296L9.62236 34.9319C9.90824 33.8649 11.0049 33.2318 12.0718 33.5176L14.0037 34.0353C14.5866 34.1915 15.04 34.5896 15.2848 35.0927C17.0003 32.0527 20.2604 30 24 30C27.738 30 30.9969 32.0509 32.713 35.0889C32.9583 34.588 33.4108 34.1918 33.9918 34.0361L35.9237 33.5184C36.9906 33.2326 38.0873 33.8657 38.3732 34.9326L39.1496 37.8304C39.4355 38.8974 38.8024 39.994 37.7354 40.2799L35.8036 40.7976C35.1488 40.973 34.4829 40.8023 34 40.3977V41C34 41.5523 33.5523 42 33 42C32.4477 42 32 41.5523 32 41V40C32 39.619 31.9734 39.2442 31.9218 38.8774ZM24 40C24.5523 40 25 39.5523 25 39C25 38.4477 24.5523 38 24 38C23.4477 38 23 38.4477 23 39C23 39.5523 23.4477 40 24 40ZM15 9.5C15 9.0625 19.516 6 24 6C28.484 6 33 9.0625 33 9.5C33 11.06 32.8343 11.9838 32.6937 12.4869C32.6014 12.817 32.2922 13 31.9494 13H16.0507C15.7078 13 15.3986 12.8169 15.3063 12.4868C15.1657 11.9836 15 11.0598 15 9.5ZM22.5 9C21.9477 9 21.5 9.44772 21.5 10C21.5 10.5523 21.9477 11 22.5 11H25.5C26.0523 11 26.5 10.5523 26.5 10C26.5 9.44772 26.0523 9 25.5 9H22.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HealthLiteracy extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HealthLiteracy({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.0656 10.3347C27.495 10.5444 25.8365 10.8493 24 11.24C22.1635 10.8493 20.505 10.5444 18.9344 10.3347C20.3889 10.8707 21.8637 11.5367 23.4281 12.2734C23.7775 12.438 24 12.79 24 13.1762C24 12.79 24.2225 12.438 24.5719 12.2734C26.1363 11.5367 27.6111 10.8707 29.0656 10.3347ZM24 36.4187C24 37.1531 23.234 37.6363 22.5649 37.3335C17.7454 35.1522 13.6821 33.9758 8.23384 34.9702C7.6002 35.0859 7 34.6111 7 33.967V10.7733C6.27982 10.9178 5.53424 11.0833 4.75659 11.2706C4.31119 11.3779 4 11.7783 4 12.2364V37.7749C4 38.4077 4.58268 38.8804 5.20425 38.7618C11.4168 37.5766 15.6049 37.4936 21.3258 38.3611C21.8219 39.3338 22.8331 40 24 40C25.1669 40 26.1781 39.3338 26.6742 38.3611C32.3951 37.4936 36.5832 37.5766 42.7957 38.7618C43.4173 38.8804 44 38.4077 44 37.7749V12.2364C44 11.7783 43.6888 11.3779 43.2434 11.2706C42.4658 11.0833 41.7202 10.9178 41 10.7733V33.967C41 34.6111 40.3998 35.0859 39.7662 34.9702C34.3179 33.9758 30.2546 35.1522 25.4351 37.3335C24.766 37.6363 24 37.1531 24 36.4187Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5375V33.967C8 33.9674 8 33.9678 8.00001 33.9681C8.00095 33.9694 8.003 33.9719 8.00678 33.9749C8.01286 33.9798 8.02054 33.9838 8.02856 33.9859C8.03554 33.9877 8.04358 33.9884 8.05429 33.9865C13.7857 32.9404 18.0681 34.2006 22.9773 36.4225C22.9823 36.4248 22.9847 36.4252 22.985 36.4252L22.9861 36.4252C22.9877 36.4251 22.9921 36.4242 22.9972 36.4209C22.9983 36.4202 22.9993 36.4195 23 36.4189C23 36.4189 23 36.419 23 36.4189V13.1772C17.6831 10.6732 13.6584 9.12233 8 10.5375ZM7.48401 8.60493C13.8784 6.99621 18.4649 8.83062 23.8542 11.3687C24.5553 11.6989 25 12.4043 25 13.1762V36.4187C25 37.8969 23.4678 38.8398 22.1526 38.2445C17.4227 36.1038 13.5785 35.0113 8.41339 35.954C7.20041 36.1754 6 35.2701 6 33.967V10.524C6 9.63895 6.589 8.83011 7.48401 8.60493Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 10.5375V33.967C40 33.9674 40 33.9678 40 33.9681C39.999 33.9694 39.997 33.9719 39.9932 33.9749C39.9871 33.9798 39.9795 33.9838 39.9714 33.9859C39.9645 33.9877 39.9564 33.9884 39.9457 33.9865C34.2143 32.9404 29.9319 34.2006 25.0227 36.4225C25.0177 36.4248 25.0153 36.4252 25.015 36.4252L25.0139 36.4252C25.0123 36.4251 25.0079 36.4242 25.0028 36.4209C25.0017 36.4202 25.0007 36.4193 25 36.4187C25 36.4186 25 36.4188 25 36.4187V13.1762C30.3169 10.6723 34.3416 9.12233 40 10.5375ZM40.516 8.60493C34.1216 6.99621 29.5351 8.83062 24.1458 11.3687C23.4447 11.6989 23 12.4052 23 13.1772V36.4189C23 37.8971 24.5322 38.8398 25.8474 38.2445C30.5773 36.1038 34.4215 35.0113 39.5866 35.954C40.7996 36.1754 42 35.2701 42 33.967V10.524C42 9.63895 41.411 8.83011 40.516 8.60493Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32 14C32.5523 14 33 14.4477 33 15V23C33 23.5523 32.5523 24 32 24C31.4477 24 31 23.5523 31 23V15C31 14.4477 31.4477 14 32 14Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5604 19.3396C31.5296 19.61 30.4492 20.0774 28.9782 20.8783C28.4931 21.1424 27.8858 20.9632 27.6217 20.4782C27.3576 19.9931 27.5368 19.3858 28.0218 19.1217C29.5591 18.2848 30.8001 17.7337 32.0529 17.4051C33.3128 17.0745 34.5336 16.9823 36.0138 17.0027C36.566 17.0103 37.0075 17.4642 36.9999 18.0164C36.9923 18.5686 36.5384 19.0101 35.9862 19.0025C34.6091 18.9835 33.584 19.071 32.5604 19.3396Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5097 27.5C14.4259 27.4716 16.0447 27.7466 19.1421 28.9338L19.8579 27.0662C16.5375 25.7935 14.6697 25.4692 11.4903 25.5001L11.5097 27.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5097 22.5C14.4259 22.4716 16.0447 22.7466 19.1421 23.9338L19.8579 22.0662C16.5375 20.7935 14.6697 20.4692 11.4903 20.5001L11.5097 22.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5097 17.5C14.4259 17.4716 16.0447 17.7466 19.1421 18.9338L19.8579 17.0662C16.5375 15.7935 14.6697 15.4692 11.4903 15.5001L11.5097 17.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HealthDataSync extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HealthDataSync({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM20 4C18.3431 4 17 5.34315 17 7H14C12.3431 7 11 8.34315 11 10V38C11 39.6569 12.3431 41 14 41H24V39H14C13.4477 39 13 38.5523 13 38V10C13 9.44772 13.4477 9 14 9H17C17 10.6569 18.3431 12 20 12H28C29.6569 12 31 10.6569 31 9H34C34.5523 9 35 9.44772 35 10V26H37V10C37 8.34315 35.6569 7 34 7H31C31 5.34315 29.6569 4 28 4H20ZM19 7C19 6.44772 19.4477 6 20 6H28C28.5523 6 29 6.44772 29 7V9C29 9.55228 28.5523 10 28 10H20C19.4477 10 19 9.55228 19 9V7ZM23 19V16H25V19H28V21H25V24H23V21H20V19H23ZM24 33.665V29.665H26V31.3532L27.3975 30.04C28.2314 29.2096 29.2613 28.6027 30.392 28.2757C31.5279 27.9471 32.7285 27.9116 33.8818 28.1726C35.0351 28.4335 36.1035 28.9824 36.9873 29.7679C37.8711 30.5535 38.5415 31.5501 38.936 32.6648L37.0506 33.332C36.7688 32.5358 36.2899 31.8239 35.6587 31.2628C35.0274 30.7017 34.2642 30.3097 33.4404 30.1233C32.6166 29.9369 31.759 29.9622 30.9477 30.1969C30.1363 30.4316 29.3977 30.868 28.8006 31.4654C28.7932 31.4727 28.7857 31.48 28.7781 31.4872L27.5246 32.665H29V34.665H25C24.4477 34.665 24 34.2173 24 33.665ZM39.6667 35.332H35.6667V37.332H37.1418L35.8885 38.5097C35.8809 38.5168 35.8734 38.5241 35.866 38.5315C35.2689 39.1289 34.5302 39.5653 33.7189 39.8C32.9075 40.0346 32.05 40.06 31.2262 39.8736C30.4024 39.6872 29.6392 39.2951 29.0079 38.734C28.3766 38.1729 27.8978 37.4611 27.616 36.6648L25.7306 37.332C26.125 38.4467 26.7955 39.4434 27.6793 40.2289C28.5631 41.0145 29.6315 41.5633 30.7848 41.8243C31.9381 42.0852 33.1387 42.0498 34.2746 41.7212C35.4053 41.3941 36.4352 40.7873 37.269 39.9569L38.6667 38.6435V40.332H40.6667V36.332C40.6667 35.7797 40.219 35.332 39.6667 35.332Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
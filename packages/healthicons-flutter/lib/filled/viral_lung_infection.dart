import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ViralLungInfection extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ViralLungInfection({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0121 14.5034C24.0041 14.6679 24 14.8335 24 15C24 15.1609 24.0038 15.3209 24.0113 15.4799L24.0056 22.4938C24.0045 23.8908 24.5676 24.4352 25.0067 24.6919C25.0525 24.7186 25.0985 24.7431 25.1445 24.7655C25.1458 24.6606 25.1465 24.5582 25.1466 24.4585C25.1468 24.2467 25.1445 24.0123 25.142 23.7596C25.1314 22.6899 25.1175 21.2922 25.2757 19.891C26.9887 22.94 30.2538 25 34 25C35.312 25 36.565 24.7473 37.713 24.288C39.9758 31.2843 40.7889 39.5164 39.114 40.9063C36.116 43.3942 30.1255 41.8951 27.132 38.9042C24.7264 36.5007 24.9272 30.904 25.0805 26.8612C24.7624 26.7791 24.3825 26.6436 23.9974 26.4185C23.6416 26.2106 23.2999 25.9364 23.0031 25.5843C22.7056 25.9359 22.3635 26.2095 22.0074 26.4169C21.6228 26.6409 21.2436 26.7756 20.9258 26.8573C21.0714 30.8756 21.2479 36.4004 18.8624 38.776C15.8786 41.7475 9.91484 43.2295 6.93555 40.7488C3.95627 38.2682 8.94503 13.9857 15.9014 13.9914C20.9794 13.9956 20.9054 20.4127 20.8674 23.708C20.8645 23.9596 20.8619 24.193 20.8617 24.404C20.8616 24.5197 20.8624 24.6389 20.8639 24.7616C20.9096 24.7394 20.9554 24.7151 21.0009 24.6886C21.4404 24.4327 22.0044 23.8892 22.0056 22.4922L22.0059 22.1166C22.007 20.2024 22.007 16.3781 22.0067 12.9347L22.0057 6.00072C22.0057 6.00062 22.0057 6.00012 23.0057 5.99991C24.0057 5.99969 24.0057 5.99974 24.0057 5.99984L24.006 8.00084L24.0174 8.0009L24.0174 8.00528L24.0121 14.5034ZM36.7574 19.1716C36.2326 19.5192 35.6384 19.7704 35 19.9V21C35.5523 21 36 21.4477 36 22C36 22.5523 35.5523 23 35 23H33C32.4477 23 32 22.5523 32 22C32 21.4477 32.4477 21 33 21V19.9C32.3616 19.7704 31.7674 19.5192 31.2426 19.1716L30.4142 20.0001C30.8047 20.3906 30.8047 21.0238 30.4142 21.4143C30.0236 21.8048 29.3905 21.8048 29 21.4143L27.5857 20.0001C27.1952 19.6096 27.1952 18.9764 27.5857 18.5859C27.9763 18.1953 28.6094 18.1953 29 18.5859L29.8284 17.7574C29.4808 17.2326 29.2296 16.6384 29.1 16H28C28 16.5523 27.5523 17 27 17C26.4477 17 26 16.5523 26 16V14C26 13.4477 26.4477 13 27 13C27.5523 13 28 13.4477 28 14H29.1C29.2296 13.3616 29.4808 12.7674 29.8284 12.2426L29 11.4143C28.6095 11.8048 27.9764 11.8048 27.5858 11.4143C27.1953 11.0238 27.1953 10.3906 27.5858 10.0001L28.2835 9.30236C28.2866 9.29919 28.2898 9.29603 28.2929 9.29289C28.296 9.28975 28.2992 9.28664 28.3024 9.28355L29 8.58586C29.3906 8.19534 30.0237 8.19534 30.4143 8.58586C30.8048 8.97639 30.8048 9.60955 30.4143 10.0001L31.2426 10.8284C31.7674 10.4808 32.3616 10.2296 33 10.1V9C32.4477 9 32 8.55228 32 8C32 7.44772 32.4477 7 33 7L35 7C35.5523 7 36 7.44772 36 8C36 8.55228 35.5523 9 35 9V10.1C35.6384 10.2296 36.2326 10.4808 36.7574 10.8284L37.5858 9.99992C37.1953 9.6094 37.1953 8.97624 37.5858 8.58571C37.9764 8.19519 38.6095 8.19519 39 8.58571L40.4143 9.99992C40.8048 10.3904 40.8048 11.0236 40.4143 11.4141C40.0237 11.8047 39.3906 11.8047 39 11.4141L38.1716 12.2426C38.5192 12.7674 38.7704 13.3616 38.9 14H40C40 13.4477 40.4477 13 41 13C41.5523 13 42 13.4477 42 14V16C42 16.5523 41.5523 17 41 17C40.4477 17 40 16.5523 40 16H38.9C38.7704 16.6384 38.5192 17.2326 38.1716 17.7574L39 18.5859C39.3906 18.1953 40.0237 18.1953 40.4143 18.5859C40.8048 18.9764 40.8048 19.6096 40.4143 20.0001L39 21.4143C38.6095 21.8048 37.9764 21.8048 37.5858 21.4143C37.1953 21.0238 37.1953 20.3906 37.5858 20.0001L36.7574 19.1716Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tooth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tooth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5592 11.1258C23.7585 10.9692 32.0804 4.49515 37.5808 10.8727C40.6004 14.3739 40.3444 18.0063 39.2239 21.5635L35.2816 32.8565C34.1289 36.783 33.307 37.9951 31.2874 39.701C30.0886 40.7135 28.7366 38.9646 27.3138 37.1239C26.0812 35.5293 24.7954 33.8658 23.5098 33.8697C22.203 33.8737 20.8965 35.5398 19.6465 37.1338C18.2048 38.9724 16.8383 40.715 15.6331 39.701C13.1996 37.6532 12.1324 34.8237 11.0169 30.2829C10.8022 29.4087 10.4755 28.3602 10.1153 27.2039C8.60445 22.3544 6.50278 15.6083 9.58534 11.8657C13.3919 7.24419 18.12 6.50021 23.5088 11.0887L23.5592 11.1258ZM20.9001 11.6004C19.0357 10.3193 17.4509 9.91183 16.1308 10.0157C14.5088 10.1432 12.8241 11.0794 11.1291 13.1373C9.85439 14.6849 9.72465 17.2994 10.4119 20.7151C10.7392 22.3418 11.2167 23.9892 11.6976 25.5539C11.8013 25.8915 11.9067 26.2298 12.0112 26.565C12.3755 27.7341 12.7283 28.8661 12.9592 29.8058C13.9804 33.9629 14.8687 36.1971 16.48 37.7712C16.8126 37.4619 17.2333 36.965 17.7899 36.2597C17.8766 36.1497 17.9666 36.0348 18.0593 35.9164C18.6295 35.1885 19.3048 34.3262 19.9937 33.6369C20.7255 32.9047 21.9352 31.8745 23.5038 31.8697C25.0796 31.8649 26.2861 32.9118 27.003 33.6389C27.6819 34.3276 28.3478 35.1901 28.9098 35.918C29.0017 36.037 29.0908 36.1524 29.1767 36.2629C29.7219 36.9638 30.1349 37.4586 30.4615 37.7681C31.1093 37.1824 31.5294 36.6934 31.8929 36.0853C32.3622 35.3003 32.7993 34.2118 33.3626 32.2931C33.372 32.2609 33.3823 32.229 33.3934 32.1973L37.3253 20.934C37.8394 19.2943 38.1005 17.797 37.9642 16.3899C37.8315 15.0193 37.3116 13.6229 36.0662 12.1789C34.0017 9.78507 31.4653 9.74886 29.0724 10.4904C27.8673 10.8638 26.7857 11.42 25.9936 11.8956C25.6964 12.074 25.4459 12.2375 25.2515 12.3701L29.0925 15.1943C29.5374 15.5215 29.6329 16.1474 29.3057 16.5923C28.9786 17.0373 28.3526 17.1328 27.9077 16.8056L22.4829 12.8168C22.4078 12.769 22.3352 12.7158 22.2657 12.6571L21.1076 11.8056C21.0267 11.7461 20.9574 11.6768 20.9001 11.6004ZM16.1293 38.0449L16.1332 38.043C16.1305 38.0443 16.1292 38.0449 16.1293 38.0449Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
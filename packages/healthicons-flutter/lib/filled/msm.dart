import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Msm extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Msm({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9.5C19 11.433 17.433 13 15.5 13C13.567 13 12 11.433 12 9.5C12 7.567 13.567 6 15.5 6C17.433 6 19 7.567 19 9.5Z" fill="#333333"/>
<path d="M9.54918 21.2295C9.62326 20.7973 9.70344 20.3841 9.78902 20H10L9.99999 40.4999C9.99999 41.305 10.6356 41.9666 11.4401 41.9987C12.2446 42.0308 12.931 41.4221 12.9952 40.6195L13.8448 30H16.1552L17.0048 40.6196C17.069 41.4222 17.7554 42.0309 18.5599 41.9988C19.3644 41.9667 20 41.3051 20 40.5V20H20.52C20.7216 20.4603 20.9219 20.9644 21.115 21.4919C21.5234 22.6073 21.8786 23.7682 22.13 24.7282C22.2558 25.2083 22.3526 25.6267 22.4167 25.9561C22.4489 26.1209 22.4711 26.2545 22.4848 26.3569C22.4968 26.4459 22.4995 26.4905 22.5 26.4998C22.5 27.3282 23.1716 27.9998 24 27.9998C24.8284 27.9998 25.5 27.3282 25.5 26.4998C25.5005 26.4905 25.5032 26.4459 25.5152 26.3569C25.5289 26.2545 25.5511 26.1209 25.5833 25.9561C25.6474 25.6267 25.7442 25.2083 25.87 24.7282C26.1214 23.7682 26.4766 22.6073 26.885 21.4919C27.0781 20.9644 27.2784 20.4603 27.48 20H28V40.5C28 41.3051 28.6356 41.9667 29.4401 41.9988C30.2446 42.0309 30.931 41.4222 30.9952 40.6196L31.8448 30H34.1552L35.0048 40.6195C35.069 41.4221 35.7554 42.0308 36.5599 41.9987C37.3644 41.9666 38 41.305 38 40.4999L38 20H38.211C38.2966 20.3841 38.3767 20.7973 38.4508 21.2295C38.8377 23.4866 39 25.9007 39 26.4998C39 27.3282 39.6716 27.9998 40.5 27.9998C41.3284 27.9998 42 27.3282 42 26.4998C42 25.7023 41.818 23.1164 41.4077 20.7227C41.2033 19.5302 40.9277 18.2949 40.5544 17.3264C40.3707 16.8497 40.1282 16.3431 39.7945 15.9298C39.4696 15.5275 38.8762 14.9998 38 14.9998H37L36.9748 15H28V15.023C27.3409 15.1209 26.8498 15.512 26.5537 15.8035C26.1803 16.1711 25.8574 16.6368 25.5819 17.1034C25.0251 18.0464 24.5062 19.2632 24.0679 20.4605C24.0451 20.5227 24.0225 20.585 24 20.6474C23.9775 20.585 23.9549 20.5227 23.9321 20.4605C23.4938 19.2632 22.9749 18.0464 22.4181 17.1034C22.1426 16.6368 21.8197 16.1711 21.4463 15.8035C21.1502 15.512 20.6591 15.1209 20 15.023V15H11.2139L11.1886 14.9998H10C9.12379 14.9998 8.53042 15.5275 8.20554 15.9298C7.87179 16.3431 7.62933 16.8497 7.44557 17.3264C7.07231 18.2949 6.79669 19.5302 6.5923 20.7227C6.18201 23.1164 6 25.7023 6 26.4998C6 27.3282 6.67157 27.9998 7.5 27.9998C8.32843 27.9998 9 27.3282 9 26.4998C9 25.9007 9.16231 23.4866 9.54918 21.2295Z" fill="#333333"/>
<path d="M29 9.5C29 11.433 30.567 13 32.5 13C34.433 13 36 11.433 36 9.5C36 7.567 34.433 6 32.5 6C30.567 6 29 7.567 29 9.5Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
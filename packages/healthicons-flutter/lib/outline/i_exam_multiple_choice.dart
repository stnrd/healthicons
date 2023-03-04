import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IExamMultipleChoice extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IExamMultipleChoice({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 16C36 14.3431 37.3431 13 39 13C40.6569 13 42 14.3431 42 16V36.3028L39 40.8028L36 36.3028V16ZM39 15C38.4477 15 38 15.4477 38 16V35.6972L39 37.1972L40 35.6972V16C40 15.4477 39.5523 15 39 15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 20H37V18H41V20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C8.89543 8 8 8.89543 8 10V37.9992C8 39.1038 8.89543 39.9992 10 39.9992H30C31.1046 39.9992 32 39.1038 32 37.9992V10C32 8.89543 31.1046 8 30 8H10ZM6 10C6 7.79086 7.79086 6 10 6H30C32.2091 6 34 7.79086 34 10V37.9992C34 40.2084 32.2091 41.9992 30 41.9992H10C7.79086 41.9992 6 40.2084 6 37.9992V10Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 15C20 14.4477 20.4477 14 21 14H29C29.5523 14 30 14.4477 30 15C30 15.5523 29.5523 16 29 16H21C20.4477 16 20 15.5523 20 15Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 19C20 18.4477 20.4477 18 21 18H29C29.5523 18 30 18.4477 30 19C30 19.5523 29.5523 20 29 20H21C20.4477 20 20 19.5523 20 19Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 28C20 27.4477 20.4477 27 21 27H29C29.5523 27 30 27.4477 30 28C30 28.5523 29.5523 29 29 29H21C20.4477 29 20 28.5523 20 28Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 32C20 31.4477 20.4477 31 21 31H29C29.5523 31 30 31.4477 30 32C30 32.5523 29.5523 33 29 33H21C20.4477 33 20 32.5523 20 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 28V31H15V28H12ZM11 26H16C16.5523 26 17 26.4477 17 27V32C17 32.5523 16.5523 33 16 33H11C10.4477 33 10 32.5523 10 32V27C10 26.4477 10.4477 26 11 26Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 14.2929C18.0976 14.6834 18.0976 15.3166 17.7071 15.7071L13 20.4142L10.2929 17.7071C9.90237 17.3166 9.90237 16.6834 10.2929 16.2929C10.6834 15.9024 11.3166 15.9024 11.7071 16.2929L13 17.5858L16.2929 14.2929C16.6834 13.9024 17.3166 13.9024 17.7071 14.2929Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
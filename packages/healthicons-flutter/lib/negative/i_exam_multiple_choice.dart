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
<path d="M21 14C20.4477 14 20 14.4477 20 15C20 15.5523 20.4477 16 21 16H29C29.5523 16 30 15.5523 30 15C30 14.4477 29.5523 14 29 14H21Z" fill="#333333"/>
<path d="M20 19C20 18.4477 20.4477 18 21 18H29C29.5523 18 30 18.4477 30 19C30 19.5523 29.5523 20 29 20H21C20.4477 20 20 19.5523 20 19Z" fill="#333333"/>
<path d="M21 27C20.4477 27 20 27.4477 20 28C20 28.5523 20.4477 29 21 29H29C29.5523 29 30 28.5523 30 28C30 27.4477 29.5523 27 29 27H21Z" fill="#333333"/>
<path d="M20 32C20 31.4477 20.4477 31 21 31H29C29.5523 31 30 31.4477 30 32C30 32.5523 29.5523 33 29 33H21C20.4477 33 20 32.5523 20 32Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 26H11C10.4477 26 10 26.4477 10 27V32C10 32.5523 10.4477 33 11 33H16C16.5523 33 17 32.5523 17 32V27C17 26.4477 16.5523 26 16 26ZM12 31V28H15V31H12Z" fill="#333333"/>
<path d="M17.7071 14.2929C18.0976 14.6834 18.0976 15.3166 17.7071 15.7071L13 20.4142L10.2929 17.7071C9.90237 17.3166 9.90237 16.6834 10.2929 16.2929C10.6834 15.9024 11.3166 15.9024 11.7071 16.2929L13 17.5858L16.2929 14.2929C16.6834 13.9024 17.3166 13.9024 17.7071 14.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM39 13C37.3431 13 36 14.3431 36 16V18H42V16C42 14.3431 40.6569 13 39 13ZM36 20V36.5L39 41L42 36.5V20H36ZM6 38.9992V9C6 7.34314 7.34315 6 9 6H31C32.6569 6 34 7.34315 34 9V38.9992C34 40.6561 32.6569 41.9992 31 41.9992H9C7.34315 41.9992 6 40.6561 6 38.9992Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 13C37.3431 13 36 14.3431 36 16V18H42V16C42 14.3431 40.6569 13 39 13ZM42 20H36V36.5L39 41L42 36.5V20Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9V38.9992C6 40.6561 7.34315 41.9992 9 41.9992H31C32.6569 41.9992 34 40.6561 34 38.9992V9C34 7.34315 32.6569 6 31 6H9C7.34315 6 6 7.34314 6 9ZM20 15C20 14.4477 20.4477 14 21 14H29C29.5523 14 30 14.4477 30 15C30 15.5523 29.5523 16 29 16H21C20.4477 16 20 15.5523 20 15ZM21 18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20H29C29.5523 20 30 19.5523 30 19C30 18.4477 29.5523 18 29 18H21ZM20 28C20 27.4477 20.4477 27 21 27H29C29.5523 27 30 27.4477 30 28C30 28.5523 29.5523 29 29 29H21C20.4477 29 20 28.5523 20 28ZM21 31C20.4477 31 20 31.4477 20 32C20 32.5523 20.4477 33 21 33H29C29.5523 33 30 32.5523 30 32C30 31.4477 29.5523 31 29 31H21ZM12 28V31H15V28H12ZM11 26H16C16.5523 26 17 26.4477 17 27V32C17 32.5523 16.5523 33 16 33H11C10.4477 33 10 32.5523 10 32V27C10 26.4477 10.4477 26 11 26ZM17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L13 17.5858L11.7071 16.2929C11.3166 15.9024 10.6834 15.9024 10.2929 16.2929C9.90237 16.6834 9.90237 17.3166 10.2929 17.7071L13 20.4142L17.7071 15.7071Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
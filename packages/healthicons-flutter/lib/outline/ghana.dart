import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Ghana extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Ghana({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 7C23.4477 7 23 7.44772 23 8V10.98L22.1428 11.1037C21.0776 11.2575 20.03 11.5437 19.0251 11.9599C16.6497 12.9439 14.6194 14.6101 13.1909 16.748C11.7624 18.8858 11 21.3992 11 23.9704C11 26.5415 11.7624 29.055 13.1909 31.1928C14.6194 33.3306 16.6497 34.9969 19.0251 35.9808C20.03 36.3971 21.0776 36.6833 22.1428 36.837L23 36.9608V40C23 40.5523 23.4477 41 24 41C24.5523 41 25 40.5523 25 40V36.9608L25.8571 36.837C26.0841 36.8043 26.3105 36.7655 26.5362 36.7206C29.0579 36.219 31.3743 34.9808 33.1924 33.1628C33.5829 32.7722 33.5829 32.1391 33.1924 31.7486C32.8019 31.358 32.1687 31.358 31.7782 31.7486C30.2528 33.2739 28.3128 34.3169 26.2 34.7481L25 34.9931L25 12.9477L26.2 13.1926C28.3128 13.6239 30.2528 14.6668 31.7782 16.1922C32.1687 16.5827 32.8019 16.5827 33.1924 16.1922C33.5829 15.8017 33.5829 15.1685 33.1924 14.778C31.3743 12.9599 29.0579 11.7218 26.5362 11.2202C26.3105 11.1753 26.0841 11.1365 25.8571 11.1037L25 10.98V8C25 7.44772 24.5523 7 24 7ZM21 8C21 6.34315 22.3431 5 24 5C25.6568 5 27 6.34314 27 8V9.27344C29.8812 9.86155 32.5265 11.2837 34.6066 13.3638C35.7782 14.5354 35.7782 16.4348 34.6066 17.6064C33.435 18.778 31.5355 18.778 30.364 17.6064C29.411 16.6535 28.2604 15.9307 27 15.4851V32.4557C28.2604 32.01 29.411 31.2873 30.364 30.3343C31.5355 29.1628 33.435 29.1628 34.6066 30.3343C35.7782 31.5059 35.7782 33.4054 34.6066 34.577C32.5265 36.6571 29.8812 38.0792 27 38.6673V40C27 41.6569 25.6569 43 24 43C22.3431 43 21 41.6569 21 40V38.6673C20.0663 38.4767 19.1486 38.1967 18.2597 37.8286C15.5189 36.6933 13.1762 34.7707 11.528 32.3039C9.87974 29.8372 9 26.9371 9 23.9704C9 21.0037 9.87973 18.1036 11.528 15.6368C13.1762 13.1701 15.5189 11.2475 18.2597 10.1122C19.1486 9.74403 20.0663 9.46402 21 9.27344V8ZM23 12.9477L23 34.9931L21.8 34.7481C21.1153 34.6084 20.4423 34.403 19.7905 34.1331C17.7805 33.3005 16.0625 31.8906 14.8538 30.0817C13.6451 28.2727 13 26.146 13 23.9704C13 21.7948 13.6451 19.668 14.8538 17.8591C16.0625 16.0502 17.7805 14.6403 19.7905 13.8077C20.4423 13.5377 21.1153 13.3324 21.8 13.1926L23 12.9477ZM21 15.4851C20.8507 15.5379 20.7026 15.5947 20.5558 15.6555C18.9113 16.3367 17.5057 17.4902 16.5168 18.9702C15.5278 20.4503 15 22.1903 15 23.9704C15 25.7504 15.5278 27.4905 16.5168 28.9705C17.5057 30.4506 18.9113 31.6041 20.5559 32.2853C20.7026 32.3461 20.8507 32.4029 21 32.4557L21 15.4851Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
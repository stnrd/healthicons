import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Opthalmology extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Opthalmology({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 24.4C38 24.4 30.3 16 24.0368 16C17.7737 16 10 24.4 10 24.4C10 24.4 17.7737 32.8 24.0368 32.8C30.3 32.8 38 24.4 38 24.4ZM15.8902 21.7845C14.673 22.722 13.615 23.664 12.835 24.4C13.615 25.136 14.673 26.078 15.8902 27.0155C17.1891 28.0161 18.6313 28.9821 20.0803 29.691C21.5468 30.4085 22.8938 30.8 24.0368 30.8C25.1791 30.8 26.5207 30.409 27.9788 29.6925C29.4198 28.9844 30.8522 28.0194 32.1415 27.0196C33.3527 26.0802 34.4041 25.1364 35.1777 24.4C34.4041 23.6636 33.3527 22.7198 32.1415 21.7804C30.8522 20.7806 29.4198 19.8156 27.9788 19.1075C26.5207 18.391 25.1791 18 24.0368 18C22.8938 18 21.5468 18.3915 20.0803 19.109C18.6313 19.8179 17.1891 20.7839 15.8902 21.7845Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 30.1C27.148 30.1 29.7 27.548 29.7 24.4C29.7 21.252 27.148 18.7 24 18.7C20.852 18.7 18.3 21.252 18.3 24.4C18.3 27.548 20.852 30.1 24 30.1ZM24 32.1C28.2526 32.1 31.7 28.6526 31.7 24.4C31.7 20.1474 28.2526 16.7 24 16.7C19.7474 16.7 16.3 20.1474 16.3 24.4C16.3 28.6526 19.7474 32.1 24 32.1Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 27.9C25.933 27.9 27.5 26.333 27.5 24.4C27.5 23.5308 27.1832 22.7356 26.6587 22.1236C26.7485 22.2784 26.8 22.4582 26.8 22.6501C26.8 23.23 26.3299 23.7001 25.75 23.7001C25.1701 23.7001 24.7 23.23 24.7 22.6501C24.7 22.0702 25.1701 21.6001 25.75 21.6001C25.9419 21.6001 26.1217 21.6516 26.2765 21.7415C25.6645 21.2169 24.8693 20.9 24 20.9C22.067 20.9 20.5 22.467 20.5 24.4C20.5 26.333 22.067 27.9 24 27.9Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
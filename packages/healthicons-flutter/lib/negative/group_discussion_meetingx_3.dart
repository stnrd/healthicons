import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class GroupDiscussionMeetingx3 extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const GroupDiscussionMeetingx3({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM18.5 26C18.5 28.21 16.71 30 14.5 30C12.29 30 10.5 28.21 10.5 26C10.5 23.79 12.29 22 14.5 22C16.71 22 18.5 23.79 18.5 26ZM14.5 32C11.6631 32 6 33.5227 6 36.5455V42H23V36.5455C23 33.5227 17.3369 32 14.5 32ZM37.5 26C37.5 28.21 35.71 30 33.5 30C31.29 30 29.5 28.21 29.5 26C29.5 23.79 31.29 22 33.5 22C35.71 22 37.5 23.79 37.5 26ZM24 28C26.21 28 28 26.21 28 24C28 21.79 26.21 20 24 20C21.79 20 20 21.79 20 24C20 26.21 21.79 28 24 28ZM23 12.8333C23 10.164 20.836 8 18.1667 8H14.9983C12.2378 8 10 10.2378 10 12.9983C10 15.6881 12.1286 17.8956 14.8167 17.9933L15 18V20C15 20 23 18.8333 23 12.8333ZM31.2361 6C28.3443 6 26 8.34429 26 11.2361C26 17.7361 35 19 35 19V16H37C39.7614 16 42 13.7614 42 11C42 8.23858 39.7614 6 37 6H31.2361ZM25 36.5455C25 33.5227 30.6631 32 33.5 32C36.3369 32 42 33.5227 42 36.5455V42H25V36.5455ZM23.9999 35H24V34.5455C24 32.8677 25.8474 31.652 28.005 30.9024C26.8966 30.3829 25.5433 30 24 30C22.4567 30 21.1033 30.3829 19.995 30.9024C22.1526 31.652 23.9999 32.8677 23.9999 34.5455V35Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Forest extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Forest({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 18C24 24.1767 20.5 29.2635 16 29.9268L16 38V39H32V30.0457H27.2727C25.4653 30.0457 24 28.5805 24 26.773C24 25.4934 24.7344 24.3853 25.8047 23.8472C25.6952 23.4779 25.6364 23.0869 25.6364 22.6821C25.6364 20.9565 26.7048 19.4805 28.2161 18.8794C28.1342 18.5237 28.0909 18.1534 28.0909 17.7729C28.0909 15.0616 30.2887 12.8638 33 12.8638C35.7112 12.8638 37.909 15.0616 37.909 17.7729C37.909 18.1533 37.8658 18.5237 37.7839 18.8793C39.2953 19.4804 40.3637 20.9565 40.3637 22.6821C40.3637 23.0869 40.3049 23.478 40.1953 23.8472C41.2656 24.3853 42 25.4934 42 26.773C42 28.5805 40.5348 30.0457 38.7273 30.0457H34V39H40.5C41.3284 39 42 39.6716 42 40.5C42 41.3284 41.3284 42 40.5 42H7.5C6.67157 42 6 41.3284 6 40.5C6 39.6716 6.67157 39 7.5 39H14V38L14 29.9268C9.50005 29.2635 6 24.1767 6 18C6 11.3726 10.0294 6 15 6C19.9706 6 24 11.3726 24 18Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
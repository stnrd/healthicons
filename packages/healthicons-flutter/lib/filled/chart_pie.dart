import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ChartPie extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ChartPie({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.9544 15.366L8.04541 34.366L7.04541 32.634L39.9544 13.634L40.9544 15.366Z" fill="#333333"/>
<path d="M7.54552 33.5C5.87792 30.6116 5 27.3352 5 24C5 20.6648 5.87792 17.3884 7.54552 14.5C9.21312 11.6116 11.6116 9.21312 14.5 7.54552C17.3884 5.87792 20.6648 5 24 5L24 24L7.54552 33.5Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.93561 32.1201L23 23.4226L23 6.02779C20.1881 6.18424 17.447 6.99875 15 8.41154C12.2637 9.99137 9.99137 12.2637 8.41154 15C6.83171 17.7363 6 20.8403 6 24C6 26.8256 6.66513 29.6066 7.93561 32.1201ZM6.67949 34C4.92412 30.9596 4 27.5107 4 24C4 20.4893 4.92412 17.0404 6.67949 14C8.43486 10.9596 10.9596 8.43485 14 6.67949C17.0404 4.92412 20.4893 4 24 4C24.5523 4 25 4.44771 25 5L25 24C25 24.3573 24.8094 24.6874 24.5 24.866L8.04541 34.366C7.56712 34.6422 6.95563 34.4783 6.67949 34Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
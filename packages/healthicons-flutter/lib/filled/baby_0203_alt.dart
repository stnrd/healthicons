import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Baby0203Alt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Baby0203Alt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9999 18.25C27.3138 18.25 30 15.5638 30 12.2501C30 8.93635 27.3138 6.25 23.9999 6.25C20.6862 6.25 18 8.93635 18 12.2501C18 15.5638 20.6862 18.25 23.9999 18.25Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 16.6968V34.2911C15 37.702 17.8125 42.2498 24 42.2498C30.1875 42.2498 33 38.2705 33 34.2911V33.4364C31.556 29.7655 28.5648 26.093 24.9861 23.0024C22.9581 21.2511 20.7695 19.7108 18.615 18.4804C18.4277 18.3783 18.2384 18.2724 18.0469 18.1627C17.0121 17.5964 15.9892 17.104 15 16.6968ZM25.0324 20.4411C25.4587 20.7818 25.8794 21.1313 26.2933 21.4887C28.893 23.7338 31.2616 26.328 33 29.0806V17.2498C29.9579 19.428 27.49 20.4357 25.0324 20.4411Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
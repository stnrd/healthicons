import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class StarSmall extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const StarSmall({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H0V48H48V0ZM24.9173 14.5681C24.5421 13.8106 23.4579 13.8106 23.0827 14.5681L20.6305 19.519C20.4815 19.8198 20.1935 20.0283 19.8603 20.0765L14.3769 20.8704C13.5379 20.9919 13.2029 22.0193 13.81 22.6089L17.7778 26.4626C18.0189 26.6967 18.1289 27.0341 18.072 27.3647L17.1353 32.8062C16.992 33.6388 17.8691 34.2738 18.6195 33.8807L23.524 31.3115C23.822 31.1554 24.178 31.1554 24.476 31.3115L29.3805 33.8807C30.1309 34.2738 31.008 33.6388 30.8647 32.8062L29.928 27.3647C29.8711 27.0341 29.9811 26.6967 30.2222 26.4626L34.19 22.6089C34.7971 22.0193 34.4621 20.9919 33.6231 20.8704L28.1397 20.0765C27.8065 20.0283 27.5185 19.8198 27.3695 19.519L24.9173 14.5681Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
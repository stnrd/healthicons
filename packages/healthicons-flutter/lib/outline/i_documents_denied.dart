import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class IDocumentsDenied extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const IDocumentsDenied({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7071 20.2929C22.3166 19.9024 21.6834 19.9024 21.2929 20.2929C20.9024 20.6834 20.9024 21.3166 21.2929 21.7071L24.5858 25L21.2929 28.2929C20.9024 28.6834 20.9024 29.3166 21.2929 29.7071C21.6834 30.0976 22.3166 30.0976 22.7071 29.7071L26 26.4142L29.2929 29.7071C29.6834 30.0976 30.3166 30.0976 30.7071 29.7071C31.0976 29.3166 31.0976 28.6834 30.7071 28.2929L27.4142 25L30.7071 21.7071C31.0976 21.3166 31.0976 20.6834 30.7071 20.2929C30.3166 19.9024 29.6834 19.9024 29.2929 20.2929L26 23.5858L22.7071 20.2929Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38 15V36C38 37.6569 36.6569 39 35 39H17C15.3431 39 14 37.6569 14 36V8C14 6.34315 15.3431 5 17 5H28L38 15ZM28 16C27.4477 16 27 15.5523 27 15V7H17C16.4477 7 16 7.44772 16 8V36C16 36.5523 16.4477 37 17 37H35C35.5523 37 36 36.5523 36 36V16H28ZM29 8.82843L34.1716 14H29V8.82843Z" fill="#333333"/>
<path d="M12 11V38C12 39.6569 13.3431 41 15 41H34V43H15C12.2386 43 10 40.7614 10 38V11H12Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
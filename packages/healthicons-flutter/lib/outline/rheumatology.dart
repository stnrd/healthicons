import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Rheumatology extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Rheumatology({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 8H9C8.44771 8 8 8.44772 8 9V39C8 39.5523 8.44772 40 9 40H39C39.5523 40 40 39.5523 40 39V9C40 8.44771 39.5523 8 39 8ZM9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9Z" fill="#333333"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C20.5523 6 21 6.44772 21 7V13L21 13.0044V15.6815C21 16.5241 20.6576 17.3305 20.0515 17.9157L19.6306 18.322C18.6126 19.305 18.5983 20.9317 19.599 21.9323C20.3692 22.7026 21.546 22.8936 22.5204 22.4064L22.7257 22.3037C23.5278 21.9026 24.472 21.9026 25.2742 22.3037L25.4795 22.4064C26.4538 22.8936 27.6306 22.7026 28.4009 21.9323C29.4015 20.9317 29.3873 19.305 28.3693 18.322L27.9484 17.9157C27.3423 17.3305 27 16.5241 27 15.6815L27 7C27 6.44772 27.4477 6 28 6C28.5523 6 29 6.44772 29 7V10.9193C34.2627 12.9321 38 18.0296 38 24C38 29.9704 34.2627 35.0679 29 37.0808V41C29 41.5523 28.5523 42 28 42C27.4477 42 27 41.5523 27 41L27 32.3182C27 31.4757 27.3423 30.6693 27.9484 30.0841L28.3693 29.6777C29.3873 28.6948 29.4015 27.0681 28.4009 26.0675C27.6306 25.2972 26.4538 25.1062 25.4795 25.5934L25.2742 25.696C24.472 26.0971 23.5278 26.0971 22.7257 25.696L22.5204 25.5934C21.546 25.1062 20.3692 25.2972 19.599 26.0674C18.5983 27.0681 18.6126 28.6948 19.6306 29.6777L20.0515 30.084C20.6576 30.6693 21 31.4757 21 32.3183V34.6623L21 34.6667V40.5C21 41.0523 20.5523 41.5 20 41.5C19.4477 41.5 19 41.0523 19 40.5V37.0808C13.7373 35.0679 10 29.9704 10 24C10 18.0296 13.7373 12.9321 19 10.9193V7C19 6.44772 19.4477 6 20 6Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
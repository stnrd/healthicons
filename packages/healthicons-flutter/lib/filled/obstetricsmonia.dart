import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Obstetricsmonia extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Obstetricsmonia({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6H9ZM15.5147 32.2826C20.201 36.9689 27.799 36.9689 32.4853 32.2826C37.1716 27.5963 37.1716 19.9983 32.4853 15.312C28.1211 10.9479 21.2319 10.6479 16.5205 14.412C19.3557 14.1191 21.2657 17.6825 19.064 19.8843C17.9881 20.9601 18.7501 22.7996 20.2715 22.7996H20.909C22.4818 22.7996 23.8582 23.857 24.2635 25.3768L25.5365 30.1506C26.271 29.8355 26.8742 29.4299 27.3619 29.002L27.3223 29.0051C26.5929 29.0612 25.9295 28.583 25.7521 27.8733L24.7621 23.9135C24.5612 23.1098 25.0498 22.2954 25.8535 22.0945C26.6572 21.8936 27.4716 22.3822 27.6725 23.1859L28.3552 25.9168L30.3096 25.7664C30.8204 25.7271 31.316 25.9513 31.6238 26.3609C31.9316 26.7705 32.009 27.3089 31.8291 27.7887C31.2018 29.4616 28.8422 33.1268 23.6606 33.7026C22.9144 33.7855 22.2218 33.3039 22.0397 32.5756L21.4136 30.071L18.909 30.6971C18.1053 30.898 17.2909 30.4094 17.09 29.6057C16.8891 28.802 17.3777 27.9876 18.1814 27.7867L22.1412 26.7967C22.4668 26.7153 22.8083 26.7459 23.112 26.8803L22.8142 25.7633C22.584 24.9001 21.8023 24.2996 20.909 24.2996H20.2715C17.4137 24.2996 15.9825 20.8444 18.0033 18.8236C19.2705 17.5564 17.9793 15.4418 16.2731 15.9902L14.4024 16.5915C10.8636 21.2927 11.2343 28.0022 15.5147 32.2826ZM14.1005 33.6968C19.5678 39.1641 28.4322 39.1641 33.8995 33.6968C39.3668 28.2294 39.3668 19.3651 33.8995 13.8978C28.4322 8.43045 19.5678 8.43045 14.1005 13.8978C8.63316 19.3651 8.63317 28.2294 14.1005 33.6968ZM33.3946 24.2922C32.3011 25.3857 30.5282 25.3857 29.4348 24.2922C28.3413 23.1988 28.3413 21.4259 29.4348 20.3324C30.5282 19.239 32.3011 19.239 33.3946 20.3324C34.488 21.4259 34.488 23.1988 33.3946 24.2922Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SexualReproductiveHealth extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SexualReproductiveHealth({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H48V48H0V0ZM17.5459 15.4794C16.1101 14.9188 14.5294 14.8478 13.0491 15.2774C11.5688 15.7069 10.2716 16.6131 9.35898 17.8553C8.44632 19.0974 7.96916 20.606 8.00154 22.1471C8.03393 23.6881 8.57405 25.1754 9.53809 26.3781C10.5021 27.5808 11.8362 28.4317 13.3332 28.7987C14.8303 29.1657 16.4066 29.0283 17.8176 28.4079C19.2286 27.7875 20.3954 26.7187 21.1369 25.3673C21.8783 24.016 22.1531 22.4577 21.9184 20.9343C21.8343 20.3885 22.2087 19.8778 22.7545 19.7937C23.3004 19.7097 23.811 20.084 23.8951 20.6298C24.1968 22.5885 23.8436 24.592 22.8903 26.3294C21.9369 28.0668 20.4368 29.441 18.6227 30.2387C17.7831 30.6079 16.8979 30.844 15.9985 30.9444C15.9995 30.9628 16 30.9814 16 31V33H18C18.5523 33 19 33.4477 19 34C19 34.5523 18.5523 35 18 35H16V39C16 39.5523 15.5523 40 15 40C14.4477 40 14 39.5523 14 39V35H12C11.4477 35 11 34.5523 11 34C11 33.4477 11.4477 33 12 33H14V31C14 30.9814 14.0005 30.9628 14.0015 30.9445C13.6177 30.9016 13.2354 30.8339 12.857 30.7411C10.9322 30.2693 9.21703 29.1753 7.97755 27.629C6.73807 26.0826 6.04362 24.1704 6.00199 22.1891C5.96035 20.2078 6.57384 18.2681 7.74727 16.671C8.92069 15.074 10.5884 13.9089 12.4917 13.3566C14.3949 12.8043 16.4273 12.8956 18.2733 13.6164C18.7878 13.8172 19.042 14.3971 18.8411 14.9116C18.6403 15.426 18.0604 15.6803 17.5459 15.4794ZM24.4064 15.4982C25.838 14.9271 27.4182 14.8445 28.9016 15.2632C30.385 15.682 31.6888 16.5786 32.6105 17.814C33.5322 19.0494 34.0204 20.5546 33.9993 22.0958C33.9783 23.637 33.449 25.1282 32.4938 26.3379C31.5386 27.5477 30.2109 28.4083 28.7165 28.7863C27.2222 29.1643 25.6449 29.0384 24.2294 28.4284C23.7222 28.2098 23.1339 28.4437 22.9153 28.9509C22.6967 29.4581 22.9306 30.0464 23.4378 30.265C25.2578 31.0494 27.2857 31.2112 29.207 30.7252C31.1282 30.2392 32.8354 29.1327 34.0635 27.5774C35.2916 26.022 35.972 24.1048 35.9992 22.1232C36.0244 20.2811 35.4837 18.4792 34.4555 16.9587L39.9691 11.4451L39.9371 13.9874C39.9301 14.5396 40.3721 14.993 40.9244 14.9999C41.4766 15.0069 41.9299 14.5648 41.9369 14.0126L42.0128 7.98716L35.9874 8.06306C35.4352 8.07001 34.9931 8.52333 35.0001 9.07557C35.007 9.62781 35.4604 10.0699 36.0126 10.0629L38.5549 10.0309L33.1535 15.4323C32.1082 14.4529 30.8382 13.7317 29.4449 13.3385C27.5377 12.8001 25.5061 12.9063 23.6653 13.6406C21.8246 14.3749 20.2777 15.6962 19.2647 17.3995C18.2517 19.1028 17.8292 21.0928 18.0627 23.0608C18.1278 23.6092 18.6252 24.001 19.1736 23.9359C19.7221 23.8708 20.1139 23.3735 20.0488 22.825C19.8671 21.2944 20.1957 19.7466 20.9836 18.4218C21.7716 17.097 22.9747 16.0693 24.4064 15.4982Z" fill="#333333"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
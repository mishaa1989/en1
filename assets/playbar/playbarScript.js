cp.playbarAssetArr = 
[
	'AudioOff',
	'AudioOn',
	'BackGround',
	'Backward',
	'Color',
	'ColorSmall',
	'CC',
	'Exit',
	'FastForward',
	'FastForward1',
	'FastForward2',
	'Forward',
	'Glow',
	'GlowSmall',
	'Height',
	'Play',
	'Pause',
	'Progress',
	'Rewind',
	'Stroke',
	'StrokeSmall',
	'Thumb',
	'ThumbBase',
	'TOC'
];
cp.playbarTooltips = 
{
	AudioOff : "오디오 켜기 ", 
	AudioOn : "오디오 끄기 ", 
	Backward : "뒤로 ", 
	CC : "폐쇄 캡션 ", 
	Exit : "끝내기 ", 
	FastForward : "2배속 빨리 감기 ", 
	FastForward1 : "4배속 빨리 감기 ", 
	FastForward2 : "일반 속도 ", 
	Forward : "앞으로 ", 
	Play : "재생 ", 
	Pause : "일시 중지 ", 
	Rewind : "되감기 ", 
	TOC : "목차 ", 
	Info : "정보 ", 
	Print : "인쇄 "
};
cp.responsiveButtons = 
{
	//"ButtonName"	: 	[Primary,Tablet,Mobile],
	"Rewind"		: 	[true,true,true,true,false],
	"Backward"		: 	[true,true,true,true,true],
	"Play"			: 	[true,true,true,true,true],
	"Slider"		: 	[true,true,true,true,false],
	"Forward"		: 	[true,true,true,true,true],
	"CC"			: 	[true,true,true,true,true],
	"AudioOn"		: 	[true,true,false,false,false],
	"Exit"			: 	[true,true,true,true,true],
	"FastForward"	: 	[true,true,true,true,false],
	"TOC"			: 	[true,true,true,true,false]
};
cp.handleSpecialForPlaybar = function(playbarConstruct)
{
}
import { AfterViewInit, Component, EffectRef, ElementRef, Input, Signal, ViewChild, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-gif-player',
  templateUrl: './gif-player.component.html',
  styleUrls: ['./gif-player.component.scss']
})
export class GifPlayerComponent implements AfterViewInit {
  @Input({ required: true }) src!: string;
  @Input({ required: true }) thumbnail!: string;
  @ViewChild('gifPlayer') videoRef?: ElementRef<HTMLVideoElement>

  video: WritableSignal<HTMLVideoElement | undefined> = signal(undefined);
  playing: WritableSignal<boolean> = signal(false);
  status: WritableSignal<GifPlayerStatus> = signal('initial');

  state: Signal<GifPlayerState> = computed(() => ({
    playing: this.playing(),
    status: this.status(),
  }));

  constructor() {
    
    effect(() => {
      const video = this.video();
      const status = this.status();
      const playing = this.playing();
        
      console.log(video, status, playing);
      
      if (video === undefined) return;

      if (status === 'initial') {      
        video.load();
      }

      if (status === 'loaded') {
        playing ? video.play() : video.pause();
      }
    }, { allowSignalWrites: true });
  }

  ngAfterViewInit(): void {
    this.video.set(this.videoRef!.nativeElement);
  }
}

export interface GifPlayerState {
  playing: boolean;
  status: GifPlayerStatus;
}

export type GifPlayerStatus = 'initial' | 'loading' | 'loaded';

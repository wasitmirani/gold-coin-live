<div>
    {{-- Care about people's approval and you will be their prisoner. --}}
   
    <form wire:submit.prevent="submit" enctype="multipart/form-data"  method="post">
        @csrf
        @if (Session::has('message'))
            <div class="alert alert-info">{{ Session::get('message') }}</div>
            <br>
        @endif
        <div class="fugu-contact-wrap  wow fadeInUpX"
            style="visibility: visible; animation-name: fadeInUpX;">

            <div class="fugu-input-field">
                <label>Invoice File</label>
                {{-- <input type="hidden"  wire:model="user_id" value="{{auth()->user()->id}}"> --}}
                <input type="file" wire:model="fileName" required name="file"
                    class="form-control @error('file') is-invalid @enderror">
                    @error('fileName') <span class="text-danger">{{ $message }}</span> @enderror
            </div>
            <button type="submit" id="fugu-input-submit">Upload</button>
        </div>

    </form>
</div>
